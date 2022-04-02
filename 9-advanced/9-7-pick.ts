{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "http: //...",
      data: "byte-data",
    };
  }

  type VideoMetaData = Pick<Video, "id" | "title">;
  function getVideoMetaData(id: string): VideoMetaData {
    return {
      id: id,
      title: "title",
    };
  }
}
