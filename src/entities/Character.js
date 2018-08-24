export default class Character {
    constructor(id, name, description, thumbnail, comics, series, stories ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.picture = `${thumbnail.path}.${thumbnail.extension}`;
        this.bookmarked = false;
        this.comics = comics;
        this.series = series;
        this.stories = stories
    }
}