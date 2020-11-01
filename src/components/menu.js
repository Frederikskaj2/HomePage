import topMenu from '../content/menu.yaml';

export const getMenu = (allMdx) => {
    const menu = topMenu.map((menu) => {
        return {
            text: menu.title,
            narrowText: menu.narrowTitle || menu.title,
            items: menu.groups.map((subMenu) => {
                var edges = allMdx.edges.filter(
                    (edge) =>
                        edge.node.fields.folder === menu.folder && edge.node.frontmatter.menuGroup === subMenu.name
                );
                return {
                    text: subMenu.header,
                    items: edges
                        .map((edge) => {
                            return {
                                text: edge.node.frontmatter.menuTitle || edge.node.frontmatter.title,
                                link: edge.node.fields.slug,
                                sequence: edge.node.frontmatter.sequence || 1000000,
                            };
                        })
                        .concat(
                            (subMenu.items || []).map((item) => {
                                return {
                                    text: item.title,
                                    link: item.link,
                                    sequence: item.sequence || 1000000,
                                };
                            })
                        ),
                };
            }),
        };
    });
    for (var i = 0; i < menu.length; i += 1) {
        const level1Item = menu[i];
        for (var j = 0; j < level1Item.items.length; j += 1) {
            const level2Item = level1Item.items[j];
            if (!level2Item.items || level2Item.items.length === 0) {
                level1Item.items.splice(j--, 1);
            } else {
                level2Item.items.sort((first, second) => {
                    if (first.sequence < second.sequence) return -1;
                    if (second.sequence < first.sequence) return 1;
                    if (first.text < second.text) return -1;
                    if (second.text < first.text) return 1;
                    return 0;
                });
            }
        }
        if (level1Item.items.length === 0) {
            menu.splice(i--, 1);
        }
    }

    return menu;
};
