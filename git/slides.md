---
title: git to the rescue
theme: night
revealOptions:
    transition: 'fade'
---
<!-- .slide: id="frontmatter" -->

## git to the rescue
## Beers n' Learn 

<img class="git-img" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
     alt="Git icon"
     style="float: center" />

---

<img class="git-mess" src="https://i.redd.it/kdrpa186gx051.png"
     alt="Git icon"
     style="float: center" />

---

### commit hash

```bash
sha1 {
    commit message
    committer
    commit date
    author
    authoring date
    Hash of tree structure for the directory
    Parent hash(es)
}
```

---

### git config

Useful for configuring user name and email per repository. 

Suppose my global email (associated to my SSH key) is `john.doe@mail.com` and I want to work with another account `jdoe@gmail.com` in a particular repo:

```bash
git config --local user.name "jdoe"
git config --local user.email "jdoe@gmail.com" 
```

Also useful for aliases:

```bash
git config --global alias.aa \
   'commit --amend --author="jdoe<jdoe@gmail.com>"'
```

---

<!-- .slide: id="first-slide" -->

```mermaid
stateDiagram
    [*] --> A
    A --> B
    B --> C
    C --> [*]
```

`git` stores a whole copy of the repo in each node, so what if we left a secret stored since A?

---
### git remote

Suppose we want to work with two different remote versions of the repository, e.g. I fork a repo I want to contribute to, want to do the changes in my remote forked repo `branch` and then push the branch to the original repo:

```bash
git remote -v
> origin  https://github.com/ncordon/repo.git (fetch)
> origin  https://github.com/ncordon/repo.git (push)
```

```bash
git remote add upstream https://github.com/author/original.git
```

```bash
git pull upstream/branch
git push upstream/branch
```

---
### git rebase

```bash
git rebase -i <commit hash | --root>
```

would let us modify commits that happened after the provided hash.

There is a better editor for the what `rebase prompts`: [`rebase-editor`](https://github.com/sjurba/rebase-editor): 

```bash
git config --global sequence.editor rebase-editor
```

---
If we run `git rebase -i A`, hashes would change and we would have to force push to `origin` to the corresponding branch: `git push --force`:

```mermaid
stateDiagram
    [*] --> AA
    AA --> BB
    BB --> CC
    CC --> [*]
```

<!-- comment about leveraging bash commands for i in {1..10}; do git aa && git rebase --continue ; done -->

---

### Thanks for listening
