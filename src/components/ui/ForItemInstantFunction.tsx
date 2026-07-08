// import type { Item } from "./ForList";
// import Download from "./Download";

// type ForItemProps = {
//     item: Item;
// };

// export default function ForItemInstantFunction({ item}: ForItemProps) {
//     return (
//         <>
//             <dt>
//                 <a href="">
//                     {item.title} ({item.price}円)</a>
//             </dt>
//             {(() => {
//                 if (item.download) {
//                     return <dd>{item.summary}<Download isbn={item.isbn} /></dd>
//                 }else {
//                     return <dd>{item.summary}</dd>
//                 }
//             })()}
//             </>
//     );
// }