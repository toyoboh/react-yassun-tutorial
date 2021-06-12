const LANGAGES = [
    "JavaScript",
    "C++",
    "Ruby",
    "Java",
    "PHP",
    "Go"
];

export const List = ({ title }) => {
    return(
        <div>
            <h4>{ title }</h4>
            {
                LANGAGES.map((lang, index) => {
                    return <div key={ index }>{ lang }</div>
                })
            }
        </div>
    )
}