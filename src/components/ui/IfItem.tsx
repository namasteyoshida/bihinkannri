// import Download from "./Download";
// import type { Item } from "./ForList";

// type IfItemProps = {
//     book: Item;
// }

// export default function IfItem({ book }:IfItemProps){
//     let dd;
//     if(book.download){
//         dd=<dd>{book.summary}<Download isbn={book.isbn} /></dd>
//     }else {
//         dd=<dd>{book.summary}</dd>
//     }
//     return(
//         <>
//             <dt>
//                 <a href={`https://wings.msn.to/books/${book.isbn}/${book.isbn}.jpg`}>
//                 {book.title} ({book.price}円)
//                 </a>
//             </dt>
//             {dd}
//         </>
//     )
// }