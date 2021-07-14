package com.codeup.annotationstation.daos;

import com.codeup.annotationstation.Models.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface VideoRepository extends JpaRepository<Video, Long> {
    Video findVideoBySectionId(long id);


    @Query("from Video v where v.video_url=:video_url")
    Video findVideoByvURL(String video_url);


}