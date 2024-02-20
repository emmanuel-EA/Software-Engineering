function FormattedDate(props) {
    return <div className="Comment-date">{props.date.toLocaleString()}</div>;
}

export default FormattedDate;