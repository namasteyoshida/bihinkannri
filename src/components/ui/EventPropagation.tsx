export default function EventPropagation() {
    const handleParent = () => alert('#PARENT run');
    const handleMy = () => alert('#MY run');
    const handleChild = (
        e: React.MouseEvent<HTMLAnchorElement>
    ) => {
        e.stopPropagation();
        alert('#CHILD run');
    };

    return (
        <div id="parent" onClick={handleParent}>
            親要素
            <div id="my" onClick={handleMy}>
                現在要素
                <a id="child" href="https://wings.msn.to" onClick={handleChild}>
                    子要素
                </a>
            </div>
        </div>
    );
}