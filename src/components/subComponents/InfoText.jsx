const InfoText = ({ label, content }) => {
    return (
        <p className="text-text">
            <span className="text-text font-normal">{`${label}: `}</span>
            {content}
        </p>
    );
};
export default InfoText;
