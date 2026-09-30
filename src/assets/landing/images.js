import avatar1 from '../figma/avatar-1.jpg'
import avatar2 from '../figma/avatar-2.jpg'
import avatar3 from '../figma/avatar-3.jpg'
import avatar4 from '../figma/avatar-4.jpg'
import avatar5 from '../figma/avatar-5.jpg'
import avatar6 from '../figma/avatar-6.jpg'
import avatar7 from '../figma/avatar-7.jpg'
import course1 from '../figma/course-1.jpg'
import course2 from '../figma/course-2.jpg'
import course3 from '../figma/course-3.jpg'
import course4 from '../figma/course-4.jpg'
import course5 from '../figma/course-5.jpg'
import course6 from '../figma/course-6.jpg'
import growthIllustration from '../figma/growth-illustration.jpg'
import heroStudent from '../figma/hero-student.jpg'
import miniAvatar1 from '../figma/mini-avatar-1.jpg'
import miniAvatar2 from '../figma/mini-avatar-2.jpg'
import miniAvatar3 from '../figma/mini-avatar-3.jpg'
import miniAvatar4 from '../figma/mini-avatar-4.jpg'
import testimonialAvatar1 from '../figma/testimonial-avatar-1.jpg'
import testimonialAvatar2 from '../figma/testimonial-avatar-2.jpg'

import ctaCone from '../figma/cta-cone.png'
import ornBlobB from '../figma/orn-blob-b.png'
import ornBlobF from '../figma/orn-blob-f.png'
import ornConeA from '../figma/orn-cone-a.png'
import ornConeB from '../figma/orn-cone-b.png'
import ornConeC from '../figma/orn-cone-c.png'
import ornDiscA from '../figma/orn-disc-a.png'
import ornDiscD from '../figma/orn-disc-d.png'
import ornRingC from '../figma/orn-ring-c.png'
import ornRingE from '../figma/orn-ring-e.png'

/** The seven hero student portraits, in stacking order (Figma `1:1828`-`1:1834`). */
export const heroAvatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7]

/** The four course-card portraits (Figma `13:266`-`13:269`). */
export const courseAvatars = [miniAvatar1, miniAvatar2, miniAvatar3, miniAvatar4]

/**
 * Every raster asset used by the landing page, keyed by the name used in the
 * design so content files can reference `image: 'course1'`.
 */
export const images = {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  course1,
  course2,
  course3,
  course4,
  course5,
  course6,
  ctaCone,
  growthIllustration,
  heroStudent,
  miniAvatar1,
  miniAvatar2,
  miniAvatar3,
  miniAvatar4,
  testimonialAvatar1,
  testimonialAvatar2,
  ornBlobB,
  ornBlobF,
  ornConeA,
  ornConeB,
  ornConeC,
  ornDiscA,
  ornDiscD,
  ornRingC,
  ornRingE,
}

/**
 * The 3D ring overlapping each feature showcase. Both boxes use the same
 * render at the same 216px size (Figma `34:982` and `34:1007`).
 */
export const showcaseOrnaments = {
  growth: ornRingE,
  creator: ornBlobF,
}

/**
 * The seven 3D ornaments that frame the creator CTA banner, measured from
 * Figma frame `34:1161` (1440x488). Same structure as `heroOrnaments`; the
 * banner reuses three of the same renders at different sizes.
 */
export const ctaOrnaments = [
  { key: 'ornBlobF', src: ornBlobF, left: -8.47, top: -33.2, width: 387, height: 387, float: 1 },
  { key: 'ctaCone', src: ctaCone, left: -3.47, top: 46.11, width: 189, height: 189, float: 2 },
  { key: 'ornConeA', src: ornConeA, left: 1.11, top: 61.07, width: 344, height: 344, float: 3 },
  { key: 'ornBlobF', src: ornBlobF, left: 12.43, top: 1.02, width: 176, height: 176, float: 1 },
  { key: 'ornConeC', src: ornConeC, left: 74.86, top: 0, width: 189, height: 189, float: 2 },
  { key: 'ornRingE', src: ornRingE, left: 76.88, top: 59.22, width: 332, height: 332, float: 3 },
  { key: 'ornConeB', src: ornConeB, left: 84.86, top: 1.02, width: 372, height: 372, float: 1 },
]

/**
 * The nine 3D ornaments that frame the hero in the design (Figma frame
 * `1:1695`, group `46:79`). The design places these as transparent 3D renders
 * rather than drawn shapes, so each entry carries the measured geometry:
 *
 * - `left` / `top`  percent offsets within the 1440x1024 hero frame
 * - `width`         rendered width in px at the 1440px design width
 * - `height`        rendered height in px at the 1440px design width
 * - `float`         keyframe suffix used for the idle drift
 *
 * Sizes and offsets are taken verbatim from the Figma nodes, so the ornaments
 * bleed off the viewport edges exactly as the design does.
 */
export const heroOrnaments = [
  { key: 'ornBlobF', src: ornBlobF, left: -8.47, top: 21.58, width: 387, height: 387, float: 1, parallax: -120 },
  { key: 'ornDiscA', src: ornDiscA, left: -4.24, top: 13.87, width: 223, height: 223, float: 2 },
  { key: 'ornConeA', src: ornConeA, left: 0.97, top: 66.5, width: 344, height: 344, float: 3 },
  { key: 'ornRingC', src: ornRingC, left: 1.81, top: 77.25, width: 189, height: 189, float: 1 },
  { key: 'ornBlobB', src: ornBlobB, left: 6.04, top: 40.33, width: 256, height: 255, float: 2 },
  { key: 'ornBlobF', src: ornBlobF, left: 12.78, top: 46.58, width: 176, height: 176, float: 3 },
  { key: 'ornConeC', src: ornConeC, left: 76.67, top: 45.31, width: 189, height: 189, float: 2, parallax: -80 },
  { key: 'ornRingE', src: ornRingE, left: 78.06, top: 65.62, width: 332, height: 332, float: 1 },
  { key: 'ornDiscA', src: ornDiscA, left: 78.33, top: 43.46, width: 223, height: 223, float: 3 },
  { key: 'ornBlobB', src: ornBlobB, left: 80.35, top: 77.25, width: 256, height: 255, float: 2 },
  { key: 'ornConeB', src: ornConeB, left: 85.21, top: 21.48, width: 372, height: 372, float: 3, parallax: -60 },
  { key: 'ornDiscD', src: ornDiscD, left: 90.83, top: 13.87, width: 210, height: 209, float: 1 },
]
