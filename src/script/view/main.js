import DataSource from '../data/data-source.js';
import '../component/search-bar.js'
import '../component/futerContent.js'
import '../component/myChart.js'

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const clubListElement = document.querySelector("club-list");

    const onSearchKeyUp = () => {

        DataSource.searchClub(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        // console.log(results);
        clubListElement.clubs = results.teams
    };

    const fallbackResult = message => {
        clubListElement.renderError(message)
    };
    // console.log(searchElement.clickEvent);
    // searchElement.clickEvent = onSearchKeyUp
};

export default main;