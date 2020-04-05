import React from 'react';
import HomeComponent from './components/HomeComponent'

function Home(){
    const style = {
        maxWidth : 1024,
        margin : '0 auto',
        padding: 8
    }
    return (
        <div style={style}>
            <h1>Rick and Morty</h1>
            <img src="https://www.musikexpress.de/wp-content/uploads/2019/10/08/10/rick-morty-4-season-bildschirmfoto-2019-10-08-um-10-29-06.jpg" alt=""/>
            <p>
                Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan
                Harmon for Cartoon Network's late-night programming block Adult Swim. The series follows the
                misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty
                Smith, who split their time between domestic life and interdimensional adventures.
            </p>
            <p>
                Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer and Sarah Chalke voicing
                the rest of the family. The series originated from an animated short parody film of Back to the Future,
                created by Roiland for Channel 101, a short film festival co-founded by Harmon. The series has been
                acclaimed by critics for its originality, creativity and humor.
            </p>
            <p>
                The series has been picked up for an additional seventy episodes over an unspecified number of seasons,
                beginning with season 4. The fourth season premiered on November 10, 2019 and will consist of ten
                episodes.
            </p>
            <p>
                After having been missing for nearly 20 years, Rick Sanchez suddenly arrives at daughter Beth's doorstep
                to
                move in with her and her family. Although Beth welcomes Rick into her home, her husband, Jerry, isn't as
                happy about the family reunion. Jerry is concerned about Rick, a sociopathic scientist, using the garage
                as
                his personal laboratory. In the lab, Rick works on a number of sci-fi gadgets, some of which could be
                considered dangerous. But that's not all Rick does that concerns Jerry. He also goes on adventures
                across
                the universe that often involve his grandchildren, Morty and Summer.
            </p>
            <h3>Premise and main characters</h3>
            <p>
                The show revolves around the adventures of the members of the Smith household, which consists of parents
                Jerry and Beth, their children Summer and Morty, and Beth's father, Rick Sanchez, who lives with them as
                a guest. According to Justin Roiland, the family lives outside of Seattle, Washington.[2] The adventures
                of Rick and Morty, however, take place across an infinite number of realities, with the characters
                travelling to other planets and dimensions through portals and Rick's flying car.
            </p>
            <p>
                Rick is an eccentric and alcoholic mad scientist, who eschews many ordinary conventions such as school,
                marriage, love, and family. He frequently goes on adventures with his 14-year-old grandson, Morty, a
                kind-hearted but easily distressed boy, whose naïve but grounded moral compass plays counterpoint to
                Rick's Machiavellian ego. Morty's 17-year-old sister, Summer, is a more conventional teenager who
                worries about improving her status among her peers and sometimes follows Rick and Morty on their
                adventures. The kids' mother, Beth, is a generally level-headed person and assertive force in the
                household, though self-conscious about her professional role as a horse surgeon. She is dissatisfied
                with her marriage to Jerry, a simple-minded and insecure person, who disapproves of Rick's influence
                over his family.
            </p>
            <p>
                Different versions of the characters inhabit other dimensions throughout the multiverse and their
                personal characteristics can vary from one reality to another. The show's original Rick identifies
                himself as "Rick Sanchez of Earth Dimension C-137", in reference to his original universe, but this does
                not necessarily apply to every other member of the Smith household. For instance, in the first-season
                episode "Rick Potion #9", after turning the entire world population into monsters, Rick and Morty move
                to a different dimension, leaving Summer, Beth and Jerry behind.
            </p>
        </div>
    );
}

export default Home;
