import Policy from "../Layout/Policy/Policy"
import BlogItem from "./BlogItem"
import "./Blogs.css"
function Blogs() {
    return (
        <section className="blogs">
            <div className="container">
                <div className="section-title">
                    <h2>From Our Blog</h2>
                    <p>Summer Collection New Modern Design</p>
                </div>
                <ul className="blog-list">
                   <BlogItem /> 
                   <BlogItem />
                   <BlogItem />
                </ul>
            </div>
            <Policy/>
        </section>
    )
}

export default Blogs