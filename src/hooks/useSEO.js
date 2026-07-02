import { useEffect } from 'react';

export default function useSEO({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | Shanzay Ali Khan`;
    } else {
      document.title = 'Shanzay Ali Khan — Software Engineer';
    }

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      } else {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        metaDesc.setAttribute('content', description);
        document.head.appendChild(metaDesc);
      }
    }
  }, [title, description]);
}
