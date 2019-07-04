import React from 'react';
class Search extends React.Component {

    render() {
        return (
            <div>

                <nav>
                    <div class="nav-wrapper">
                        <a href="k.html" class="brand-logo center">Logo</a>
                        <ul id="nav-mobile" class="left hide-on-med-and-down">
                            <li><a href="sass.html">Sass</a></li>
                            <li><a href="badges.html">Components</a></li>
                            <li><a href="collapsible.html">JavaScript</a></li>
                        </ul>
                    </div>

                        <div className="nav-content">
                        
                        <form>
                            <div class="input-field">
                            <input id="search" type="search" required/>
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
export default Search;