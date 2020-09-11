import { h, Component, ComponentChild, RefObject, createRef } from 'preact';

import {
  Coords,
  hasTouchChanged,
  getMouseCoordsFromEvent,
  getTouchCoordsFromEvent,
  getFirstTouchIdFromEvent,
} from '../../utils/DomUtils';
import { debounceWithRequestAnimationFrame } from '../../utils/FunctionUtils';
import { getBounds, getBoundedOffset } from './utils/BoundingUtils';

import style from './Draggable.css';

export interface Props {
  innerRef?: RefObject<HTMLDivElement>;
  onDragStart?: () => void;
  onDragStop?: (coords: Coords) => void;
  coords: Coords | null;
  render: (isDragging: boolean) => ComponentChild;
}

export interface State {
  isDragging: boolean;
  coords: Coords;
}

class Draggable extends Component<Props, State> {
  static defaultProps: Partial<Props> = {
    coords: null,
  };

  static getDerivedStateFromProps(
    props: Props,
    state: State
  ): Partial<State> | null {
    if (!props.coords) return null;

    const { isDragging } = state;
    const hasMoved =
      props.coords.x !== state.coords.x || props.coords.y !== state.coords.y;
    if (!isDragging && hasMoved) {
      return {
        coords: { x: props.coords.x, y: props.coords.y },
      };
    }
    return null;
  }

  originalElementCoords: Coords = { x: 0, y: 0 };
  originalMouseCoords: Coords = { x: 0, y: 0 };
  touchId: number | null = null;

  state: State = {
    isDragging: false,
    coords: { x: 0, y: 0 },
  };

  ref = this.props.innerRef || createRef<HTMLDivElement>();

  applyDragging = debounceWithRequestAnimationFrame((mouseCoords: Coords) => {
    if (!this.ref.current) return;
    const mouseOffsetX = mouseCoords.x - this.originalMouseCoords.x;
    const mouseOffsetY = mouseCoords.y - this.originalMouseCoords.y;
    const nextX = this.originalElementCoords.x + mouseOffsetX;
    const nextY = this.originalElementCoords.y + mouseOffsetY;

    const bounds = getBounds(this.ref.current);
    const coords = getBoundedOffset(nextX, nextY, bounds);

    this.setState({ coords });
  });

  componentDidMount(): void {
    this.addPointerStartEventListeners();
  }

  componentWillUnmount(): void {
    this.removePointerStartEventListeners();
    this.removePointerMoveEventListeners();
    this.removePointerStopEventListeners();
  }

  addPointerStartEventListeners(): void {
    if (!this.ref.current) return;
    this.ref.current.addEventListener('mousedown', this.handleOnMouseDown, {
      passive: false,
    });
    this.ref.current.addEventListener('touchstart', this.handleOnTouchStart, {
      passive: false,
    });
  }

  addPointerMoveEventListeners(): void {
    document.addEventListener('mousemove', this.handleOnMouseMove, {
      passive: false,
    });
    document.addEventListener('touchmove', this.handleOnTouchMove, {
      passive: false,
    });
    document.addEventListener('mouseup', this.handleOnEnd, {
      passive: false,
    });
  }

  addPointerStopEventListeners(): void {
    document.addEventListener('touchend', this.handleOnEnd, {
      passive: false,
    });
    document.addEventListener('touchcancel', this.handleOnEnd, {
      passive: false,
    });
  }

  removePointerStartEventListeners(): void {
    if (!this.ref.current) return;
    this.ref.current.removeEventListener('mousedown', this.handleOnMouseDown);
    this.ref.current.removeEventListener('touchstart', this.handleOnTouchStart);
  }

  removePointerMoveEventListeners(): void {
    document.removeEventListener('mousemove', this.handleOnMouseMove);
    document.removeEventListener('touchmove', this.handleOnTouchMove);
  }

  removePointerStopEventListeners(): void {
    document.removeEventListener('mouseup', this.handleOnEnd);
    document.removeEventListener('touchend', this.handleOnEnd);
    document.removeEventListener('touchcancel', this.handleOnEnd);
  }

  handleOnTouchStart = (e: TouchEvent): void => {
    e.preventDefault();
    this.touchId = getFirstTouchIdFromEvent(e);
    if (this.touchId === null) return;

    const coords = getTouchCoordsFromEvent(e, this.touchId);
    if (coords) this.handleStart(coords);
  };

  handleOnMouseDown = (e: MouseEvent): void => {
    const mouseCoords = getMouseCoordsFromEvent(e);
    this.handleStart(mouseCoords);
  };

  handleStart = (coords: Coords): void => {
    this.removePointerStartEventListeners();
    this.addPointerMoveEventListeners();
    this.addPointerStopEventListeners();

    this.originalElementCoords = this.state.coords;
    this.originalMouseCoords = coords;

    this.setState({ isDragging: true });

    if (this.props.onDragStart) this.props.onDragStart();
  };

  handleOnMouseMove = (e: MouseEvent): void => {
    e.preventDefault();
    const mouseCoords = getMouseCoordsFromEvent(e);
    this.applyDragging(mouseCoords);
  };

  handleOnTouchMove = (e: TouchEvent): void => {
    e.preventDefault();
    if (this.touchId === null || !hasTouchChanged(e, this.touchId)) return;

    const coords = getTouchCoordsFromEvent(e, this.touchId);
    if (coords) this.applyDragging(coords);
  };

  handleOnEnd = (e: MouseEvent | TouchEvent): void => {
    e.preventDefault();

    this.removePointerMoveEventListeners();
    this.removePointerStopEventListeners();
    this.addPointerStartEventListeners();

    if (this.props.onDragStop) this.props.onDragStop(this.state.coords);
    this.setState({ isDragging: false });
  };

  render() {
    return (
      <div
        className={style.draggable}
        ref={this.ref}
        style={{
          // ...this.props.style,
          transform: `translate3d(${this.state.coords.x}px, ${this.state.coords.y}px, 0px)`,
        }}
      >
        {this.props.render(this.state.isDragging)}
      </div>
    );
  }
}

export default Draggable;
