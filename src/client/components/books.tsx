import * as React from "react";

/*
Keys only make sense in the context of the surrounding array.
For example, if you extract a ListItem component, you should keep the key on the <ListItem /> elements in the array rather than on the <li> element in the ListItem itself.
https://reactjs.org/docs/lists-and-keys.html#extracting-components-with-keys
*/
export interface Book {
    id: number;
    title: string;
    content?: string;
}

function BookItem(props: { bookName: string }) {
    return <li>{props.bookName}</li>
}

export class Books extends React.Component<{ books: Array<Book> }, {}> {
    render() {
        return (
            <ul>
                {
                    this.props.books.map(book => <BookItem key={book.id} bookName={book.title} />)
                }
            </ul>
        );
    }
}