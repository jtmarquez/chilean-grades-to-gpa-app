import es from './locale/es';

const translate = (id: string) => {
  const splittedId = id.split('.');
  const [prefix, locale] = splittedId;
  const upperCaseLocale = prefix[0].toUpperCase() + prefix.slice(1);
  if (upperCaseLocale in es && locale in es[upperCaseLocale]) {
    return es[upperCaseLocale][locale];
  } else {
    return id;
  }
};

export default translate;
