export default class Character {
    constructor(id, name, description, thumbnail ){
        this.id = id;
        this.name = name;
        this.description = description;
        this.picture = `${thumbnail.path}.${thumbnail.extension}`;
        this.bookmarked = false;
    }
}