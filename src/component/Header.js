import React from 'react';
class Header extends React.Component {
    render() {
        return (
            <div className="">
                <nav className="nav-extended teal">
                    <div className="nav-wrapper" src="">
                        <a href="k.html" className="brand-logo">NewsAdda.com</a>
                        <a href="k.html" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" clasNames="right hide-on-med-and-down">
                            <b className="right"> <li><a href="sass.html">News</a></li>
                                <li><a href="badges.html">Filter</a></li>
                                <li><a href="collapsible.html">Contact</a></li></b>
                        </ul>
                    </div>

                </nav>

                <nav>
                    <div class="nav-wrapper ">
                        <form>
                            <div className="input-field teal darken-1">
                                <input id="search" type="search" required placeholder="type any keyword" />
                                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                                <i class="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                </nav>

            </div>
        );
    }
}
export default Header;
