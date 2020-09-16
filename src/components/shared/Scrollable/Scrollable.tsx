import { h, FunctionComponent, ComponentChildren } from 'preact';

interface Props {
  children: ComponentChildren;
  display?: 'block' | 'inline-block';
  overflowX?: 'auto' | 'hidden' | 'scroll' | 'visible';
  overflowY?: 'auto' | 'hidden' | 'scroll' | 'visible';
  flex?: string;
  height?: string;
  width?: string;
}

const Scrollable: FunctionComponent<Props> = ({
  children,
  display = 'block',
  overflowX = 'auto',
  overflowY = 'auto',
  flex = '1',
  height = '100%',
  width = '100%',
}: Props) => {
  return (
    <div style={{ display, overflowX, overflowY, flex, height, width }}>
      {children}
    </div>
  );
};

export default Scrollable;
