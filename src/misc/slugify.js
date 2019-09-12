import slugify from 'slugify';

const buildSlug = string => slugify(string, {
  replacement: '_',
  lower: true,
});

export default buildSlug;
