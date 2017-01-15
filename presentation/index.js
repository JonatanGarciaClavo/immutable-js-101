// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  S
} from "spectacle";

// Import CodeSlide
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  immutableLogo: require("../assets/immutable-logo.png"),
  wat: require("../assets/wat.jpg"),
};

preloader(images);

const bgIntroColor = "#D7DADB";
const bgColor = "#222222";

const theme = createTheme({
  primary: "#F49E00",
  secundary: "white"
}, {
  primary: "labbold",
  secundary: "montserratregular",
  tertiary: "montserratbold"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor={bgIntroColor}>
            <Image width="95%" src={images.immutableLogo.replace("/", "")}/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Summary
            </Heading>
            <List>
              <Appear><ListItem textFont="secundary" textColor="secundary">What is a immutable js?</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">Types</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              What is a immutable js?
            </Heading>
            <Text style={{margin: "1.5em 0"}} textAlign="justify" textFont="secundary" textColor="secundary">
              Is a library for creating collections of data, which, once created, cannot be changed. These collections are modelled on JavaScript’s Array, Map and Set objects, but with the significant difference that all methods to add, delete or update data in a collection do not mutate (i.e. change) the collection being acted upon.
            </Text>
            <Link href="https://facebook.github.io/immutable-js/">
              <Text padding="5px 0 0 0" italic textFont="tertiary" textColor="secundary">Official page</Text>
            </Link>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Image src={images.wat.replace("/", "")} margin="0px auto 40px" height="600px"/>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/js_1.example")}
              margin="1em auto"
              textSize="1em"
            />
            <Appear>
              <CodePane
                lang="javascript"
                source={require("raw!../assets/js_2.example")}
                margin="1em auto"
                textSize="1em"
              />
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/immutable_1.example")}
              margin="1em auto"
              textSize="0.9em"
            />
            <Appear>
              <CodePane
                lang="javascript"
                source={require("raw!../assets/immutable_2.example")}
                margin="1em auto"
                textSize="0.9em"
              />
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Types
            </Heading>
            <List>
              <ListItem textFont="secundary" textColor="secundary">Record</ListItem>
              <ListItem textFont="secundary" textColor="secundary">List</ListItem>
              <ListItem textFont="secundary" textColor="secundary">Map</ListItem>
              <ListItem textFont="secundary" textColor="secundary">OrderedMap</ListItem>
              <ListItem textFont="secundary" textColor="secundary">Set</ListItem>
              <ListItem textFont="secundary" textColor="secundary">OrderedSet</ListItem>
              <ListItem textFont="secundary" textColor="secundary">Stack</ListItem>
            </List>
            <Link href="https://facebook.github.io/immutable-js/docs/#/">
              <Text padding="10px 0 0 0" italic textFont="tertiary" textColor="secundary">More types info</Text>
            </Link>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Record
            </Heading>
            <List>
              <ListItem textFont="secundary" textColor="secundary">It is similar to a JS object, but enforce a specific set of allowed string keys, and have default values</ListItem>
              <ListItem textFont="secundary" textColor="secundary">Always have a value for the keys they define. removeing a key from a record simply resets it to the default value for that key</ListItem>
              <ListItem textFont="secundary" textColor="secundary">Perfect to be used in initial state in your reducers</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Record
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/record.example")}
              margin="0 auto"
              textSize="1em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              List
            </Heading>
            <Text style={{margin: "0.5em 0"}} textAlign="justify" textFont="secundary" textColor="secundary">
              It is similar to a JavaScript array, but different enough to catch you out if you don’t create a List correctly
            </Text>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/list-initialize.example")}
              margin="0.5em auto"
              textSize="1em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              List() vs List.of()
            </Heading>
            <List>
              <ListItem textFont="secundary" textColor="secundary"><S type="italic">List.of()</S> – use when creating a List from non-iterable data (e.g. a set of function arguments, a JavaScript object, or a string you want interpreted as a whole string)</ListItem>
              <ListItem textFont="secundary" textColor="secundary"><S type="italic">List()</S> – use when creating a List from iterable data (e.g. an array, or an Immutable Iterable object (List, Map, Set, etc.), or a string that you want interpreted as a series of characters).</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              List() vs List.of()
            </Heading>
            <Text style={{margin: "0.5em 0"}} textAlign="justify" textFont="secundary" textColor="secundary">
              A JavaScript string is an iterable object, so if you create a List of strings using <S type="italic">List("string")</S>, you’ll actually get a <S type="italic">List of characters (['s', 't', 'r', 'i', 'n', 'g'])</S>. To make Immutable interpret a string as a non-iterable value, use <S type="italic">List.of("string") instead</S>
            </Text>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              List
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/list-initialize-2.example")}
              margin="0.5em auto"
              textSize="1em"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              List
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/list-initialize-3.example")}
              margin="0.5em auto"
              textSize="0.7em"
            />
            <Appear>
              <CodePane
                lang="javascript"
                source={require("raw!../assets/list-initialize-3-result.example")}
                margin="0.5em auto"
                textSize="0.7em"
              />
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              List
            </Heading>
            <CodePane
              lang="javascript"
              source={require("raw!../assets/list-initialize-4.example")}
              margin="0.5em auto"
              textSize="0.7em"
            />
            <Appear>
              <CodePane
                lang="javascript"
                source={require("raw!../assets/list-initialize-4-result.example")}
                margin="0.5em auto"
                textSize="0.7em"
              />
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              List methods
            </Heading>
            <List>
              <Appear><ListItem textFont="secundary" textColor="secundary">get and getIn</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">set and setIn</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">insert</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">unshift</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">push</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">pop</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">delete</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">clear</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">merge and mergeWith</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary">mergeDeep and mergeDeepWith</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Map
            </Heading>
            <Text style={{margin: "0.5em 0"}} textAlign="justify" textFont="secundary" textColor="secundary" textSize="1em">
              An Immutable Map is an unordered collection of key/value pairs that at first glance seems similar to a JavaScript object
            </Text>
            <List>
              <ListItem textFont="secundary" textColor="secundary" textSize="1em">You can iterate over the keys of a Map</ListItem>
              <ListItem textFont="secundary" textColor="secundary" textSize="1em">The order of keys iterated over does not change (although you don’t know what the order will be in advance)</ListItem>
              <ListItem textFont="secundary" textColor="secundary" textSize="1em">All keys are converted to strings. This will catch you out. Frequently.</ListItem>
              <ListItem textFont="secundary" textColor="secundary" textSize="1em">A key can be of any type – even NaN and an array</ListItem>
              <ListItem textFont="secundary" textColor="secundary" textSize="1em">Two Maps are the same if Immutable.is(map1, map2) returns true</ListItem>
              <ListItem textFont="secundary" textColor="secundary" textSize="1em">An Immutable collection (e.g. List, Map, Seq, etc.) can be a key</ListItem>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Map methods
            </Heading>
            <List>
              <Appear><ListItem textFont="secundary" textColor="secundary" textSize="1.2em">get and getIn</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary" textSize="1.2em">first and last</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary" textSize="1.2em">has and hasIn</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary" textSize="1.2em">includes or contains</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary" textSize="1.2em">keys, values and entries</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary" textSize="1.2em">set and setIn</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary" textSize="1.2em">update</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary" textSize="1.2em">delete</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary" textSize="1.2em">clear</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary" textSize="1.2em">merge and mergeWith</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary" textSize="1.2em">mergeDeep and mergeDeepWith</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary" textSize="1.2em">mergeIn and mergeDeepIn</ListItem></Appear>
            </List>
          </Slide>
         <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Set
            </Heading>
            <Text style={{margin: "0.5em 0"}} textAlign="justify" textFont="secundary" textColor="secundary">
              It is similar to a List at first glance, it is a collection of unique values, and so cannot contain duplicate values. If you attempt to add a duplicate value to an existing Set, it is simply ignored, and no errors are thrown
            </Text>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor} notes="Set.union() combines the values of two Sets together, ensuring no duplicates exist. Union returns the values of Set B combined with those of Set A with duplicates removed. It differs from List.merge(), which overwrites the values of List A with the values of List B that exist at the same index. In contrast, Set.union() combines two Sets of values.
Set.intersect() takes two Sets, A and B, and returns a Set that contains only those values that exist in A and B.
Set.subtract() takes two Sets, A and B, and returns a Set that contains only those values that exist in A, but do not exist in B.">
            <Heading size={2} caps textColor="primary">
              Set extra methods
            </Heading>
            <List>
              <Appear><ListItem textFont="secundary" textColor="secundary" textSize="1.2em">union</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary" textSize="1.2em">intersect</ListItem></Appear>
              <Appear><ListItem textFont="secundary" textColor="secundary" textSize="1.2em">subtract</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor={bgColor}>
            <Heading size={2} caps textColor="primary">
              Questions?
            </Heading>
            <Link href="https://github.com/JonatanGarciaClavo/immutable-js-101">
              <Text padding="100px 0 0 0" italic textSize="1.2em" textFont="montserratregular" textColor="tertiary">Slides: https://github.com/JonatanGarciaClavo/immutable-js-101</Text>
            </Link>
            <Link href="https://github.com/JonatanGarciaClavo/ContactsApp">
              <Text padding="50px 0 0 0" italic textSize="1.2em" textFont="montserratregular" textColor="tertiary">Example project: https://github.com/JonatanGarciaClavo/ContactsApp.git</Text>
            </Link>
            <Link href="http://untangled.io/the-missing-immutable-js-manual/">
              <Text padding="50px 0 0 0" italic textSize="1.2em" textFont="montserratregular" textColor="tertiary">Immutable examples: http://untangled.io/the-missing-immutable-js-manual/</Text>
            </Link>
            <Link href="mailto:jonatan.garcia@mobgen.com">
              <Text padding="50px 0 0 0" italic textSize="1.2em" textFont="montserratregular" textColor="tertiary">Email: jonatan.garcia@mobgen.com</Text>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
