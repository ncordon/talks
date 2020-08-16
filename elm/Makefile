all: clean site

clean:
	rm -r docs || echo "docs folder not found"

deps:
	npm install .

site:
	node ./node_modules/reveal-md/bin/reveal-md.js elm.md --css css/custom.css --static docs && \
	mv docs/_assets docs/assets && \
	sed -i 's/_assets/assets/g' docs/elm.html && \
	mv docs/ ../temp && \
	rm -r * && \
	mv ../temp/* . && rmdir ../temp