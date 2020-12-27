---
layout: layouts/portfolio.njk
eleventyNavigation:
  key: Git
  parent: Home
script: git.js
---
<div class="wrapper">

# Git cheat sheet

There is a wonderful german book about Git: [gitbu.ch](https://gitbu.ch/git.pdf).  
And a quickstart Site [rogerdudler.github.io](https://rogerdudler.github.io/git-guide/) or [ohshitgit.com](https://ohshitgit.com) if it's to late.

## Content
0. [Remotes](#remotes)  
1. [Branches](#branches)  
2. [Working Area](#working-area)  
3. [Index](#index)  
4. [Committing](#commit)
5. [Tagging](#tag)
6. [Files](#files) 
7. [Stash](#stash)  
8. [Merging](#merge)  
9. [Information](#info)  
10. [Tracking](#track)  
11. [Gitconfig](#config)  

These commands assume following branching concept:

![feature-branches](https://cloud.githubusercontent.com/assets/3726371/13198769/27792f90-d812-11e5-8e15-15b01b0cc4cd.png)

<h2 id="remotes">Remotes</h2>

List remotes

```shell
git remote -v
```

Add a remote

```shell
git remote add another-origin <git-repo-url>
```

Remove a remote

```shell
git remote rm <remote-name>
```

<h2 id="branches">Branches</h2>

List all branches

```shell
git branch -a
```

List remote branches

```shell
git branch -r
```

### Basics

#### Create Clean Branch

• create and checkout branch  
• origin/<main-branch> is starting point  
• and --no-track avoids tracking that starting point as upstream (which it is not)  

with the last two dashes you will receive a clear error output in case you made a mistake, it ensures that everthing before are no paths

    git checkout -b <feature-branche> --no-track origin/<main-branch> --
  
#### Delete Branch


To delete a local branch

    git branch -d <the-local_branch>
    
Delete all merged local branches. Be aware!

    git branch --merged | grep -v \* | xargs git branch -D 

To delete a remote branch (push is the only command which gives you remote access)

    git push origin :<the-remote-branch>

#### Rename Branch

Rename Branch locally

    git branch -m <old-name> <new-name>
    
Push new Branch to remote

    git push origin <new-name>:master

#### Clean Branch without history (Orphan Branch)

    git checkout -o <branch-name>    

<h2 id="working-area">Working Area</h2>

clear staging area
    
    git reset
    
Remove from staging

    git reset HEAD -- .

show local commit not pushed yet

    git log @{u}..

clean working directory
    
    git reset --hard
    
    git clean -f -d
    
remove file from commit

    git reset --soft HEAD~1
    
    git reset HEAD <path-to-file>
    
Remove file before commit

    git checkout <path-to-file>

<h2 id="index">Index</h2>

Add file to Index

    git add <path-to-file> or <path-to-folder>

Add all files to Index

    git add .
    
Add changed files to Index

    git add -u

Remove file from Index

    git rm --cached <path-to-file>
    
<h2 id="commit">Committing</h2>

Commit files with a one-liner

    git commit -m "<commit message>"

Commit files with preset Editor

    git commit
    
Empty Commit

    git commit --allow-empty -m "<commit message>"
    
Undo last commit and keep changes

    git reset HEAD^

<h2 id="tag">Tagging</h2>

Add a tag

    git tag --annotate -m "<commit message>" <tag-name>
    
Push added tag 

    git push origin <tag-name>
    
<h2 id="files">Files</h2>

Find latest commit where file existed

    git rev-list -n 1 HEAD --  <path-to-file>

Re add deleted file

    git checkout <deleting_commit>^ -- <path-to-file>

<h2 id="stash">Stash</h2>

Save custom named stash

    git stash save "stashname" 
    
Show all stashes

    git stash list

Show Stash content

    git stash show -p stash@{n}

To apply a stash and remove it from the stash list, run:

    git stash pop stash@{n}

To apply a stash and keep it in the stash cache, run:

    git stash apply stash@{n}
    
To remove a stash

    git stash drop stash@{n}
    
<h2 id="merge">Merge</h2>

### Basics

#### Update Branches

    git fetch
    
    git merge --no-ff <main-branch>

#### Sync Branches
pull changes from remote, rebase local commits to the remote-head, do not try to fix conflicts

    git pull --ff-only --rebase

### Handle conflicts the hard way
Keep mine

    git checkout --ours path/to/file

Keep other

    git checkout --theirs path/to/file
    
### Reverse Merge
update local snapshot of remote repository
update your local branch to include commits from other developers on that branch

    git fetch --prune
    git checkout <feature-branch>
    git merge --ff-only
    
if that branch is already checked out

    git pull --ff-only --prune

keep the automatic commit message

    git merge origin/<main-branch>

in case of conflicts

    git status 
    edit <file>
    git add/rm <file>
    git commit

publish the commit merge

    git push

Check which branches are merged into another

    git branch --merged <branch-to-check-against>
    
### Cherry Picking

    git cherry-pick <commit-hash>
    
Edit commit message
    
    git cherry-pick -e <commit-hash>

<h2 id="info">Information</h2>

Get information about changed files between to commits.

    git diff [SHA1]..[SHA2] --name-only
    
<h2 id="track">Tracking</h2>

Show all commits

    git reflog

Show Branches which contain a specific commit. Usefull to search for merges.

    git branch -a --contains <hash oder branch-name>

Show Informations about a particular file

    git log --follow filename

Find commit where file was added

    git log --diff-filter=A -- filename
    
or to get the commit message

    git log --oneline filename | tail -1
    
find all TODO's

    git grep -E "# TODO|// TODO"

<h2 id="config">Gitconfig</h2>

[Example config](https://gist.github.com/paesku/4668d8d6f1bda9e73f1a)
    
</div>
