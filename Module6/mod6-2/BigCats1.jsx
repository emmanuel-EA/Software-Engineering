const cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo' },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris' },
];

function BigCats() {

    const catList = cats.map(cat => (
        <li key={cat.id}>
            <h3>{cat.name}</h3>
            <em>({cat.latinName})</em>
        </li>
    ))

    return (
        <div className="BigCats">
            <h2>Big Cats</h2>
            <ul>{catList}</ul>
        </div>
    )
}

export default BigCats