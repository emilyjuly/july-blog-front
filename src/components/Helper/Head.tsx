import { useEffect } from 'react';

const Head = (props: any) => {
  useEffect(() => {
    if (document) {
      document.title = props.title + ' | Blog';

      const metaDescription = document.querySelector(
        'meta[name="description"]',
      );
      if (metaDescription) {
        metaDescription.setAttribute('content', props.description || '');
      }
    }
  }, [props]);

  return <></>;
};

export default Head;
