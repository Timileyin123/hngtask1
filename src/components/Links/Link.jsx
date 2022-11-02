import "./Link.css";
const Link = () => {

        return (
            <>
            <h1 className="links">
                <a href="https://training.zuri.team/" id="btn_zuri" target="_blank">Zuri Site</a>
                <a href="http://books.zuri.team" id="books" target="_blank" title="where you find books about design and coding">Zuri Books Site</a>
                <a href="https://books.zuri.team/python-for-beginners" id="book_python" target="_blank" title="Start your python learning journey using the best selling Python book">Python Beginner HandBook</a>
                <a href="https://background.zuri.team" id="pitch" target="_blank" title="Become a Mentor. Review other coders to see them active">Coders Examiner</a>
                <a href="https://books.zuri.team/design-rules" id="book_design" target="_blank" title="- Free design book offered by Zuri.">Free Design Book</a>
            </h1>
            </>
        );
    
}

export default Link;