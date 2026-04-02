const InfoText = ({ label, content, style }) => {
    return (
        <p className={"text-text " + style}>
            <span className="text-text font-normal">{`${label}: `}</span>
            {content}
        </p>
    );
};
export default InfoText;
