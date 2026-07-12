import { frontendTrack } from "./frontend/manifest.jsx";
import { deployTrack } from "./deploy/manifest.js";

/**
 * The single source of truth for every learning track on the platform.
 *
 * Order here is the order shown in the global nav and on the portal. A track
 * with a `nav` array gets a dropdown of its curriculum; a track without one
 * (e.g. `status: "soon"`) renders as a plain link.
 *
 * To add a track: create `src/tracks/<id>/manifest.{js,jsx}` and add it here.
 */
export const TRACKS = [frontendTrack, deployTrack];

export const TRACKS_BY_ID = Object.fromEntries(TRACKS.map((track) => [track.id, track]));
