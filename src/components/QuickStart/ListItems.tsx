import { useState } from 'react';
import { Item } from '.';

export interface ListItemsProps {
    title: string;
    items: { id: number; name: string }[];
    onTaskDone: (id: number) => void;
}

export function ListItems({ title, items, onTaskDone }: ListItemsProps) {
    const [done, setDone] = useState(0);

    function handleTaskDone(id: number) {
        setDone(done + 1);
        onTaskDone(id);
    }
    return (
        <>
            <div className="flex flex-col gap-2">
                <h1>
                    {title}: {done}
                </h1>
                {items.map((item) => (
                    <Item key={item.id} onClick={() => handleTaskDone(item.id)}>
                        {item.name}
                    </Item>
                ))}
            </div>
        </>
    );
}
