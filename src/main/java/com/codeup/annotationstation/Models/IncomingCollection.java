package com.codeup.annotationstation.Models;


public class IncomingCollection {

    private Collection collection;
    private Section section;
    private Note note;
    private Video video;
    private User user;

    public User getUser() {
        return user;
    }

    public void setUser(User user) { this.user = user; }

    public Collection getCollection() {
        return collection;
    }

    public void setCollection(Collection collection) {
        this.collection = collection;
    }

    public Section getSection() { return section; }

    public void setSection(Section section) {
        this.section = section;
    }

    public Video getVideo() { return video; }

    public void setVideo(Video video) { this.video = video; }

    public Note getNote() {
        return note;
    }

    public void setNote(Note note) {
        this.note = note;
    }
}
