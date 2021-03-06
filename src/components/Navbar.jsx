import React from 'react';

const Navbar = () => {
    return (
        <div id="header">
            <h1><a href="index.html">Belle &amp; Carrie <span>Rehabilitation Yoga</span></a></h1>
            <ul id="navigation">
                <li className="current">
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="classes.html">Classes</a>
                    <ul>
                        <li>
                            <a href="instructors.html">Instructors</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="contact.html">Contact</a>
                </li>
                <li>
                    <a href="blog.html">Blog</a>
                </li>
            </ul>
	</div>
    )
}

export default Navbar;