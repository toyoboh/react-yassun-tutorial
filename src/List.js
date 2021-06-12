const LANGAGES = [
    "JavaScript",
    "C++",
    "Ruby",
    "Java",
    "PHP",
    "Go"
];

export const List = () => {
    return(
        <div>
            {
                LANGAGES.map((lang, index) => {
                    return <div key={ index }>{ lang }</div>
                })
            }
        </div>
    )
}