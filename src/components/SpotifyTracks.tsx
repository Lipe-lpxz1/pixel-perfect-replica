const TRACKS = [
  "1llghEvUCNeaDpNGu9jjd6",
  "1EzxTgjKg5mClRtxYWo6M2",
  "3lUkePCQeZkqqZlpVvC88b",
  "0bG0faeB4FqNZTqAUpZWxh",
  "68SRxFA8YQPBQyFUeXSL7i",
  "3LcpIspnFOud4b1auowP0x",
  "5VtkGXDG8D8lSt6QduhmDe",
  "6yZlU1y8SBKEEpmzWa3M4r",
  "1WcwUsiFkdjax48O9z5xIo",
  "2pYy1stj8fRLPCooBV0BEh",
];

export function SpotifyTracks({ title = "Player Spotify - Danella" }: { title?: string }) {
  return (
    <div className="space-y-2">
      {TRACKS.map((id, i) => (
        <div key={id} className="overflow-hidden rounded-sm">
          <iframe
            title={`${title} - faixa ${i + 1}`}
            src={`https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`}
            className="block w-full"
            height={80}
            frameBorder={0}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}