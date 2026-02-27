export interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const {className} = props;

    return (
        <div className={className}>
            {`${"ArticlesPage"}`}
        </div>
    );
};
export default ArticlesPage;