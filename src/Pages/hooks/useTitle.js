import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} -Moment's Factory`;
    }, [title])
};

export default useTitle;


