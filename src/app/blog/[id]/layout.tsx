interface BlogLayoutProps {
    children: React.ReactNode;
}

export const BlogLayout: React.FC<BlogLayoutProps> = ({children}) => {
    return (
        <>{children}</>
    )
}
