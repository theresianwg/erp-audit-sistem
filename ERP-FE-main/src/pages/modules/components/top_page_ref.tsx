import contentData from '@/components/content_data';

interface TopPageRefProps {
  index_parent_page: number;
  index_child_page: number;
}

export default function TopPageRef(props: TopPageRefProps) {
  const pageParent = contentData[props.index_parent_page];
  const pageChild = pageParent.contents
    ? pageParent.contents[props.index_child_page]
    : null;

  return (
    <div className="w-full flex-col p-5">
      <p className="text-black text-3xl font-bold">{pageParent.name}</p>
      {pageChild ? (
        <div className="flex gap-2 mt-2">
          <a href={pageParent.link} className="text-black text-xl font-medium">
            {pageParent.name}
          </a>
          <p className="text-black text-xl font-medium">{'>'}</p>
          <a href={pageChild.link} className="text-black text-xl font-medium">
            {pageChild.name}
          </a>
        </div>
      ) : null}
    </div>
  );
}
