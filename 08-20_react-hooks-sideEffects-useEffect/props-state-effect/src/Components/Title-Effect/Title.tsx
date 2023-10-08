import { useEffect } from 'react';

function Title({ title }: { title: string }): JSX.Element {
    useEffect(() => {
        document.title = title;
    }, [title])

    return (<></>);
}

export default Title;
