import { attractionDropDown } from "./attractions/AttractionProvider.js"
import { parkDropDown } from "./parks/ParkProvider.js"
import { eateriesDropDown } from "./eateries/EateryProvider.js"

export const HolidayRoad = () => {
    return `
    <div id="top-container">
        <div>
            <article>
                <h2>Make an Itinerary</h2>
                <div class="dropdown-container">
                    <section>${attractionDropDown()}
                        <div class="details" id-"attraction-detail"></div>
                    </section>
                    <section>${parkDropDown()}
                        <div class="details" id="park-detail"></div>
                    </section>
                    <section>${eateriesDropDown()}
                        <div class="details" id="eateries-detail"></div>
                    </section>
                </div>
                <article>
                    <h2>Preview</h2>
                    <section class="itinerary-preview">
                    </section>
                    <button id="itinerary-button">Save Itinerary</button>
                </article>
        </div>
        </article>
        <aside>
            <h2>Saved Itineraries</h2>
            <section class="saved-itineraries">
            </section>
        </aside>
    </div>
    `
}
