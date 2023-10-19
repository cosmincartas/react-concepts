export interface ItemProps extends React.HTMLAttributes<HTMLButtonElement> {}

export function Item({ children, ...props }: ItemProps) {
    return (
        <button className="flex p-4 bg-slate-500 rounded" {...props}>
            {children}
        </button>
    );
}
