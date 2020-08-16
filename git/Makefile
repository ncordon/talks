all: clean site

clean:
	rm -r docs || echo "docs folder not found"

deps:
	npm install .

site:
	node ./node_modules/reveal-md/bin/reveal-md.js git.md --css css/custom.css --scripts "mermaid-min.js,reveal-mermaid.js" --static docs && \
	mv docs/_assets docs/assets && \
	sed -i 's/_assets/assets/g' docs/git.html && \
	mv docs/ ../temp && \
	rm -r * && \
	mv ../temp/* . && rmdir ../temp