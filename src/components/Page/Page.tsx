// * Base
import { ReactNode, memo } from 'react';

// * Hooks
import useTitle from '../../hooks/title.hook';

type TProps = {
  title?: string;
  children: ReactNode;
};

const Page = memo(({ title, children }: TProps) => {
  const pageTitle = useTitle({ title: title || '' });

  return (
    <div className="pt-6">
      <div className="wrapper">
        <h2 className="font-bold pb-6 text-2xl flex justify-center">
          {pageTitle}
        </h2>
        <div>{children}</div>
      </div>
    </div>
  );
});

export default Page;
