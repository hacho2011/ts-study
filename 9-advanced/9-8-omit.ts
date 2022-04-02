{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo2(id: string): Video {
    return {
      id,
      title: "video",
      url: "http: //...",
      data: "byte-data",
    };
  }

  type VideoMetaData = Omit<Video, "id" | "title">;
  function getVideoMetaData2(id: string): VideoMetaData {
    return {
      data: "data",
      url: "https",
    };
  }
}
