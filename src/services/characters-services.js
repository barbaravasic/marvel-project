import { getData } from "./fetch-services";
import { charactersUrl } from "../shared/constants-url";
import Character from "../entities/Character";

export const getSearchedCharacters = (inputValue) => {
    if(inputValue){
        const timestamp = "1"
        const apiKey = "c0f42c019630349445cb6a4573b75cb7";
        const hash = "e7be40190db051a7063ae09f715f2715";
        const auth = `&ts=${timestamp}&apikey=${apiKey}&hash=${hash}`;
        const url = `${charactersUrl}?limit=20&nameStartsWith=${inputValue}${auth}`;
        return getData(url)
            .then(characters => {
                return characters.map(character => {
                    const { id, name, description, thumbnail } = character;
                    return new Character(id, name, description, thumbnail);
                })
            })
    }

}