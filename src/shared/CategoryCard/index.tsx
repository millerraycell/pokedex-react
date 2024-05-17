import './styles.css';

interface CategoryCardProps {
    title: string;
}

function CategoryCard(props: CategoryCardProps) {
    function formatCardTitle(text: string): string {
        return `${text[0].toUpperCase()}${text.slice(1)}`;
    }

    return (
        <div className="bg-white shadow rounded p-3 d-flex align-items-center justify-content-center flex-column">
            <div className="d-flex align-items-center justify-content-center">
                <img src={`/assets/pokemon_types/${props.title}.png`} alt="logo" />
            </div>
            <h3 className="text-center">{formatCardTitle(props.title)}</h3>
        </div>
    );
}

export default CategoryCard;