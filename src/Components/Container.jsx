const Container = ({ children }) => {
    return (
        <div className="max-w-[1440px] mx-auto min-h-[100px]">
            {children}
        </div>
    );
};

export default Container;