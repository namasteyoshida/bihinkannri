import dl_icon from "../../assets/dl.png";
import type { Item } from "./ForList";

type DownloadProps = Pick<Item, "isbn">

export default function Download({isbn}: DownloadProps) {
    return (
        <a href={`https://wings.msn.to/index.php/-/A-07/${isbn}`}>
            <img src={dl_icon} alt="Sample Download" />
        </a>
    );
}