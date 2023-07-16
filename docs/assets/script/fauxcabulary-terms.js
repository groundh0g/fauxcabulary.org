---
---

export const FauxcabularyTerms = [
    {% assign data = site.data.terms.terms -%}
    {%- for term in data -%}
    {
        text: "{{ term[1].text }}",
        date: "{{ term[1].date }}",
        tags: "{{ term[1].tags }}",
        part: "{{ term[1].part }}",
        says: "{{ term[1].says }}",
        defs: [
            {%- for def in term[1].defs %}
            `{{ def }}`,
            {%- endfor %}
        ],
    },
    {% endfor -%}
];

export const FIRST_DATE = new Date('2023-07-15');
export const WordOfTheDayIndex = () => {
    let index = Math.floor((Date.now().valueOf() - FIRST_DATE.valueOf()) / (1000 * 60 * 60 * 24));
    while(index < 0) { index +=FauxcabularyTerms.length; }
    return index;
};

export const WordOfTheDay = () => {
    return FauxcabularyTerms[WordOfTheDayIndex() % FauxcabularyTerms.length];
};

export const TermsSortedByAlpha = () => {
    return FauxcabularyTerms.sort((a, b) => {
        return a.text - b.text;
    });
};

export const TermsSortedByDate = () => {
    return FauxcabularyTerms.sort((a, b) => {
        return a.date - b.date;
    });
};

export const TermsFiltered = (text) => {
    return FauxcabularyTerms.filter((term, index, items) => {
        const found = term.defs.filter((def, i, defs) => {
            return def.indexOf(text) >= 0;
        });
        return found.length > 0 || term.text.indexOf(text) >= 0;
    });
};
