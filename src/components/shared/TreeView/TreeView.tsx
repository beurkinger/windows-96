import { h, FunctionComponent, ComponentChild, VNode } from 'preact';

import style from './TreeView.css';
interface Props {
  items: ComponentChild[];
  isExpandable?: boolean;
  isOpen?: boolean;
  summary?: string;
}

const TreeView: FunctionComponent<Props> = ({
  items,
  isExpandable,
  isOpen = false,
  summary,
}: Props) => {
  const setExpandability = (item: VNode<unknown> | null) => {
    if (!isExpandable) return item;
    return (
      <details open={isOpen}>
        <summary>{summary}</summary>
        {item}
      </details>
    );
  };

  return setExpandability(
    <ul className={`${style.treeView}`}>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
};

export default TreeView;
