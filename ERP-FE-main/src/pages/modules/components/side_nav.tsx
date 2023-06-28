import contentData from '@/components/content_data';

interface SideNavProps {
  index_parent_page: number;
  index_child_page: number;
}

export default function SideNav(props: SideNavProps) {
  const navContent = contentData;

  return (
    <div className="bg-blue-400 min-h-screen w-[15vw] flex-col p-5">
      <h2>ERP</h2>
      <div className="flex flex-col gap-4 mt-10">
        {navContent.map((content:any, par_index:any) => {
          return (
            <div className="flex-col" key={par_index}>
              {par_index == props.index_parent_page ? (
                <a
                  href={content.link}
                  className="text-lg text-fuchsia-300 font-bold"
                >
                  {content.name}
                </a>
              ) : (
                <a href={content.link} className="text-lg font-bold">
                  {content.name}
                </a>
              )}
              <div className="flex-col pl-3">
                {content.contents
                  ? content.contents.map((subContent:any, ch_index:any) => {
                      return (
                        <div className="flex gap-2" key={ch_index}>
                          {par_index == props.index_parent_page &&
                          ch_index == props.index_child_page ? (
                            <a
                              href={subContent.link}
                              className="text-sm text-fuchsia-300 font-bold"
                            >
                              {subContent.name}
                            </a>
                          ) : (
                            <a
                              href={subContent.link}
                              className="text-sm font-bold"
                            >
                              {subContent.name}
                            </a>
                          )}
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
